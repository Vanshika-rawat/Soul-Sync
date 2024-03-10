// Define resources for each disorder
const resources = {
        'depressive-disorder': {
            book: 'Feeling Good: The New Mood Therapy - David D. Burns',
            music: 'Mad World - Gary Jules',
            exercise: 'Morning Walk'
        },
        'alcohol-related-disorders': {
            book: 'This Naked Mind: Control Alcohol, Find Freedom, Discover Happiness & Change Your Life - Annie Grace',
            music: 'Rehab - Amy Winehouse',
            exercise: 'Yoga'
        },
        'anxiety-disorders': {
            book: 'The Anxiety and Phobia Workbook - Edmund J. Bourne',
            music: 'Breathe Me - Sia',
            exercise: 'Deep Breathing'
        },
        'attention-deficit-hyperactivity-disorder': {
            book: 'Driven to Distraction: Recognizing and Coping with Attention Deficit Disorder from Childhood Through Adulthood - Edward M. Hallowell, John J. Ratey',
            music: 'Lose Yourself - Eminem',
            exercise: 'Boxing'
        },
        'autism-spectrum-disorders': {
            book: 'The Reason I Jump: The Inner Voice of a Thirteen-Year-Old Boy with Autism - Naoki Higashida',
            music: 'Rainman - Eminem',
            exercise: 'Swimming'
        },
        'bipolar-disorders': {
            book: 'An Unquiet Mind: A Memoir of Moods and Madness - Kay Redfield Jamison',
            music: 'Lithium - Nirvana',
            exercise: 'Cycling'
        },
        'body-dysmorphic-disorder': {
            book: 'The Broken Mirror: Understanding and Treating Body Dysmorphic Disorder - Katharine A. Phillips',
            music: 'Beautiful - Christina Aguilera',
            exercise: 'Weightlifting'
        },
        'borderline-personality-disorder': {
            book: 'I Hate You--Dont Leave Me: Understanding the Borderline Personality - Jerold J. Kreisman, Hal Straus',
            music: 'Unsteady - X Ambassadors',
            exercise: 'Running'
        },
        'conduct-disorders': {
            book: 'The Defiant Child: A Parents Guide to Oppositional Defiant Disorder - Douglas A. Riley',
            music: 'Another Brick in the Wall - Pink Floyd',
            exercise: 'Martial Arts'
        },
        'disruptive-impulse-control-and-conduct-disorders': {
            book: 'The Explosive Child: A New Approach for Understanding and Parenting Easily Frustrated, Chronically Inflexible Children - Ross W. Greene',
            music: 'Break Stuff - Limp Bizkit',
            exercise: 'Kickboxing'
        },
        'dissociative-disorders': {
            book: 'The Stranger in the Mirror: Dissociation--The Hidden Epidemic - Marlene Steinberg, Maxine Schnall',
            music: 'Numb - Linkin Park',
            exercise: 'Meditation'
        },
        'elimination-disorders': {
            book: 'It Hurts When I Poop! A Story for Children Who Are Scared to Use the Potty - Howard J. Bennett',
            music: 'Diarrhea - LMFAO',
            exercise: 'Walking'
        },
        'feeding-and-eating-disorders': {
            book: 'Life Without Ed: How One Woman Declared Independence from Her Eating Disorder and How You Can Too - Jenni Schaefer',
            music: 'Skinny Love - Bon Iver',
            exercise: 'Dancing'
        },
        'gender-dysphoria': {
            book: 'Transgender 101: A Simple Guide to a Complex Issue - Nicholas M. Teich',
            music: 'Born This Way - Lady Gaga',
            exercise: 'Stretching'
        },
        'hoarding-disorder': {
            book: 'Stuff: Compulsive Hoarding and the Meaning of Things - Randy O. Frost, Gail Steketee',
            music: 'Clutter - Ronald Jenkees',
            exercise: 'Decluttering'
        },
        'intellectual-developmental-disorder': {
            book: 'The Complete Guide to Aspergers Syndrome - Tony Attwood',
            music: 'Simple - Florida Georgia Line',
            exercise: 'Puzzle Solving'
        },
        'medical-conditions-with-mental-health-symptoms': {
            book: 'The Mindbody Prescription: Healing the Body, Healing the Pain - John E. Sarno',
            music: 'Hurt - Johnny Cash',
            exercise: 'Tai Chi'
        },
        'medication-induced-movement-disorders-and-other-adverse-effects-of-medication': {
            book: 'The Antidepressant Solution: A Step-by-Step Guide to Safely Overcoming Antidepressant Withdrawal, Dependence, and "Addiction" - Joseph Glenmullen',
            music: 'Shake It Off - Taylor Swift',
            exercise: 'Pilates'
        },
        'neurocognitive-disorders': {
            book: 'The 36-Hour Day: A Family Guide to Caring for People Who Have Alzheimer Disease, Other Dementias, and Memory Loss - Nancy L. Mace, Peter V. Rabins',
            music: 'Memory - Barbra Streisand',
            exercise: 'Memory Games'
        },
        'neurodevelopmental-disorders': {
            book: 'NeuroTribes: The Legacy of Autism and the Future of Neurodiversity - Steve Silberman',
            music: 'The Scientist - Coldplay',
            exercise: 'Sensory Play'
        },
        'obsessive-compulsive-and-related-disorders': {
            book: 'Brain Lock: Free Yourself from Obsessive-Compulsive Behavior - Jeffrey M. Schwartz',
            music: 'Obsessions - Marina and the Diamonds',
            exercise: 'Organizing'
        },
        'paraphilic-disorders': {
            book: 'Perv: The Sexual Deviant in All of Us - Jesse Bering',
            music: 'Closer - Nine Inch Nails',
            exercise: 'Role-playing'
        },
        'personality-disorders': {
            book: 'Borderline Personality Disorder Demystified: An Essential Guide for Understanding and Living with BPD - Robert O. Friedel',
            music: 'Somebody to Love - Queen',
            exercise: 'Self-reflection'
        },
        'posttraumatic-stress-disorder': {
            book: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma - Bessel van der Kolk',
            music: 'Hurt - Nine Inch Nails',
            exercise: 'Nature Walk'
        },
        'schizophrenia-spectrum-and-other-psychotic-disorders': {
            book: 'The Center Cannot Hold: My Journey Through Madness - Elyn R. Saks',
            music: 'Madness - Muse',
            exercise: 'Reality Testing'
        },
        'sexual-dysfunctions': {
            book: 'Come as You Are: The Surprising New Science That Will Transform Your Sex Life - Emily Nagoski',
            music: 'Sexual Healing - Marvin Gaye',
            exercise: 'Sensate Focus Exercises'
        },
        'sleep-wake-disorders': {
            book: 'Why We Sleep: Unlocking the Power of Sleep and Dreams - Matthew Walker',
            music: 'Enter Sandman - Metallica',
            exercise: 'Nightly Routine'
        },
        'somatic-symptom-and-related-disorders': {
            book: 'Its Not All in Your Head: How Worrying about Your Health Could Be Making You Sick--and What You Can Do about It - Gordon J. G. Asmundson, Steven Taylor',
            music: 'Hypochondriac - The Frights',
            exercise: 'Mindfulness'
        },
        'specific-learning-disorder': {
            book: 'Overcoming Dyslexia - Sally Shaywitz',
            music: 'School - Nirvana',
            exercise: 'Reading Aloud'
        },
        'substance-related-and-addictive-disorders': {
            book: 'Clean: Overcoming Addiction and Ending America’s Greatest Tragedy - David Sheff',
            music: 'Under the Bridge - Red Hot Chili Peppers',
            exercise: 'Group Therapy'
        },
        'suicidal-behavior-disorder': {
            book: 'Stay: A History of Suicide and the Arguments Against It - Jennifer Michael Hecht',
            music: 'The Way It Ends - Landon Tewers',
            exercise: 'Journaling'
        },
        'tic-disorders': {
            book: 'Lifes Not Always Fair, but Its Always Fairer Than Death - Gary Scheiner',
            music: 'Twitch - Bif Naked',
            exercise: 'Relaxation Techniques'
        },
        'trauma-and-stressor-related-disorders': {
            book: 'The Body Keeps the Score: Brain, Mind, and Body in the Healing of Trauma - Bessel van der Kolk',
            music: 'Breathe - Anna Nalick',
            exercise: 'Grounding Exercises'
        }
    
    // Add resources for other disorders
};

// Function to update resource card based on selected disorder
function updateResourceCard() {
    const selectElement = document.getElementById('disorder-select');
    const disorder = selectElement.value;
    const resource = resources[disorder];

    document.getElementById('resource-title').textContent = `Resources for ${selectElement.options[selectElement.selectedIndex].text}`;
    document.getElementById('book-info').textContent = resource.book;
    document.getElementById('music-info').textContent = resource.music;
    document.getElementById('exercise-info').textContent = resource.exercise;
}

// Event listener for select change
document.getElementById('disorder-select').addEventListener('change', updateResourceCard);

// Initial update when the page loads
updateResourceCard();


// After 5 seconds, remove the waves moving towards the nose
setTimeout(function() {
    document.getElementById('faceImage').classList.remove('wavy-lines');
}, 5000);
