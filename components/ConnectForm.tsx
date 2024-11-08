'use client';

import { useState, useEffect, useRef, FormEvent } from 'react';
import { HiArrowRight } from "react-icons/hi2";

interface ConnectFormProps {
  initialShowForm?: boolean;
}

export default function ConnectForm({ initialShowForm = false }: ConnectFormProps) {
  const [showForm, setShowForm] = useState(initialShowForm);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showForm && emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [showForm]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formObject: Record<string, string> = {};
    formData.forEach((value, key) => {
      formObject[key] = value.toString();
    });

    try {
      const response = await fetch('https://app.supercog.ai/signup_waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch: Server responded with a status of ' + response.status);
      }

      const data = await response.json();
      console.log('Success:', data);
      form.reset();
      alert('Thanks for signing up!');
    } catch (error) {
      console.error('Error:', error);
      alert('Sorry, there was an error submitting the form.');
    }
  };

  return (
    <>
      {!showForm ? (
        <button
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Connect with us{" "}
          <HiArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <form className="w-full max-w-md mt-4 space-y-4" onSubmit={handleSubmit}>
          <input
            ref={emailInputRef}
            name="email"
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            required
          />
          <textarea
            name="message"
            placeholder="How can Supercog help?"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Submit
          </button>
        </form>
      )}
    </>
  );
}