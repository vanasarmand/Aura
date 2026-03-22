'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function AgeVerificationModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('ageVerified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('ageVerified', 'true');
    setIsOpen(false);
  };

  const handleDeny = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-[#FAF9F6] p-8 rounded-2xl max-w-md w-full text-center shadow-2xl border border-stone-200"
          >
            <h2 className="text-3xl font-serif mb-4 text-stone-900">Are you 18 or older?</h2>
            <p className="text-stone-600 mb-8">
              You must be 18 years of age or older to enter this site. By entering, you confirm that you are of legal age to view and purchase cannabis products in South Africa under the private club model.
            </p>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleVerify}
                className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-stone-800 transition-colors"
              >
                Yes, I am 18 or older
              </button>
              <button
                onClick={handleDeny}
                className="w-full bg-transparent text-stone-500 py-4 rounded-xl font-medium hover:bg-stone-100 transition-colors"
              >
                No, I am under 18
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
