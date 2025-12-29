'use server';

import { initializeFirebase } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection } from 'firebase/firestore';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid form data.' };
  }

  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, 'contact_form_submissions');
    
    const submissionData = {
      ...parsed.data,
      submissionDate: new Date().toISOString(),
    };

    await addDocumentNonBlocking(submissionsCollection, submissionData);

    return { success: true, message: 'Form submitted successfully!' };
  } catch (error) {
    console.error('Error submitting form to Firebase:', error);
    return { success: false, message: 'Failed to submit form.' };
  }
}
