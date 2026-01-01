import React, { useState } from "react";

const Registration = ({ categories, onStart }) => {
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showRules, setShowRules] = useState(false);

  const canStart = name.trim() && selectedCategory;

  return (
    <div className="full-screen-center flex-col items-center">
      <h1 className="text-h1 font-medium mb-6 text-center">Welcome to <span className="text-primary font-light">QUIZ<strong className="font-bold">Mania</strong></span></h1>
      <div className="p-6 w-full max-w-[600px]">
        <div className="bg-light/30 rounded-lg py-4 px-3 mb-6">
          <p>Please read all the rules about this quiz before you start.</p>
          <span className="text-primary font-medium cursor-pointer"onClick={() => setShowRules(true)}
            >Quiz Rules</span>
        </div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-light rounded-lg px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-primary bg-transparent font-medium"
        />
        {/* TOPIC SELECTION */}
        <h4 className="text-h4 font-medium mb-4">
          Please select topic to continue
        </h4>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className={`option-btn border rounded-lg p-3 font-medium transition
                ${
                  selectedCategory?.id === cat.id
                    ? "border-primary active"
                    : ""
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* START QUIZ */}
        <button
          onClick={() => onStart(name, selectedCategory)}
          disabled={!canStart}
          className="px-9 bg-primary text-white py-3 rounded-lg font-medium disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Start Quiz
        </button>
      </div>
      
      {showRules && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setShowRules(false)}
        ></div>

        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-xl p-6 animate-fadeIn">
          <button onClick={() => setShowRules(false)} className="absolute top-4 right-4 close-btn rounded-lg">x</button>

          <h3 className="text-h3 font-bold mb-4">
            Quiz Rules
          </h3>
          <p className="px-4 py-2 bg-accent text-base font-bold mb-4">10-Second Timer</p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5 mb-4">
            <li>Each question comes with a 10-second timer.</li>
            <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
          </ul>
          <p className="px-4 py-2 bg-accent text-base font-bold mb-4">Manual Navigation</p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5 mb-4">
            <li>You can navigate to the next question manually before the timer expires.</li>
            <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
          </ul>
          <p className="px-4 py-2 bg-accent text-base font-bold mb-4">Final Score and Performance Message</p>
          <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
            <li>After all questions are answered, your final score will be displayed.</li>
            <li>Based on your performance, you will receive a personalized message:
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5 mt-2">
                <li>Great job!: If you score <strong>above 80%.</strong></li>
                <li>Well done!: If you score <strong>between 60% and 80%.</strong></li>
                <li>Keep practicing!: If you score <strong>below 60%.</strong></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )}
    </div>
  );
};

export default Registration;
