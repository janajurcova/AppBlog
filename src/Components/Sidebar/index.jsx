import React from "react";
import "./style.css";

export function TheSidebar() {
    return (
        <div className="sidebar">
            <h2>Related articles</h2>
            <div className="side-articles">
                <h3>Wet vs. Dry Cat Food: Which is Better?</h3>
                <p>
                    A cat's whiskers — or vibrissae — are a well-honed sensory tool that helps a cat see in the dark and steer clear of hungry predators. Whiskers are highly ...{" "}
                </p>
            </div>
            <div className="side-articles">
                <h3>How Much Wet Food Should I Feed My Cat?</h3>
                <p>
                    If you aren’t sure how much wet food you should feed your cat, Purina’s expert nutritionists can help. Plus, they offer guidance on food safety and provide ser...{" "}
                </p>
            </div>
            <div className="side-articles">
                <h3> Do Cats Drink Water? Cat Hydration a Dehydration Prevention</h3>
                <p>
                    Do cats drink water? Yes, like humans and many other animals, cats need water to survive. Many cats don’t drink as much as they should, though. Find out w...{" "}
                </p>
            </div>
            <div className="side-articles">
                <h3>What Is the Difference Between Natural and Organic Cat Food?</h3>
                <p>
                    If you prefer your own diet to be natural or organic, you’re probably considering feeding your cat a natural or organic cat food, too. What’s the difference betw...{" "}
                </p>
            </div>
        </div>
    );
};