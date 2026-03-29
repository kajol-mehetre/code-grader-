# ⚡ Code Grader App

## What It Does
A browser-based code grading tool that tests a user's JavaScript function against predefined test cases and returns a pass/fail result with a score.

## How It Works
1. User selects a problem from the dropdown
2. Problem description updates automatically
3. User writes their solution in the textarea
4. User clicks Run & Grade
5. App validates input → runs the code → tests it
6. Shows pass/fail per test case + overall score %
7. Logs every submission to history table with timestamp

## Flow of Code
```
Click Run & Grade
→ Check if textarea is empty         (validation)
→ Run user's code via new Function() (execution)
→ Compare output against test cases  (grading)
→ Calculate score                    (scoring)
→ Display results                    (showResult)
→ Log to history table               (addToHistory)
```

## Code Structure
```
grader.html
│
├── UI Layer
│   ├── Dropdown        → select a problem
│   ├── Description     → updates based on selection
│   ├── Textarea        → user writes their solution
│   ├── Run button      → triggers grading
│   ├── Result div      → shows pass/fail + score
│   └── History table   → logs every submission
│
├── Data Layer
│   └── problems{}      → single object holds all tasks
│                          and test cases
│
└── Logic Layer
    ├── updateDescription()  → syncs UI with dropdown
    ├── runBtn listener      → reads code + triggers grading
    ├── new Function()       → executes user's code
    ├── testCases.map()      → runs each test case
    ├── showResult()         → calculates score + renders
    └── addToHistory()       → logs attempt to table
```

## Concepts Used

| Concept | Where Used |
|---|---|
| DOM manipulation | Creating rows, divs, updating text |
| Event listeners | click, change |
| try/catch | Handling syntax errors gracefully |
| new Function() | Dynamically executing user code |
| array.map() | Running all test cases |
| array.every() | Checking if all tests passed |
| array.filter() | Counting passed tests |
| Score calculation | passed/total * 100 |
| new Date() | Timestamps in history |
| Objects as data stores | problems{} holds everything |
| Separation of concerns | Data vs UI vs Logic clearly split |

## Known Bugs Fixed

| Bug | Fix |
|---|---|
| Empty textarea gave misleading error | Added empty input validation before execution |
| Script tag in wrong place | Moved script before closing body tag |

## Limitations

- Can only run JavaScript code (no Python, Java etc.)
- Only tests predefined problems, not any random program
- Test cases are hardcoded — cannot add new ones from UI
- No backend — everything runs in the browser
- No user accounts or persistent submission history

## Future Improvements

- Add a backend (Python + Flask) to run any language
- Allow users to add their own problems and test cases
- Save submission history across page refreshes
- Add a timer to simulate real interview pressure
- Support more data types in test cases (arrays, objects)

## What I Learned
Built a working code grading system in one day using only HTML, CSS and JavaScript. The biggest lesson was the difference between data in memory and what's on screen — every function either touches the data layer, the UI layer, or connects the two. Never both.