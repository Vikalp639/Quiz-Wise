# QuizWise – Quiz App

A lightweight, interactive quiz application built with React. It allows users to log in, select a topic, attempt AI‑generated quizzes, and view results in a clean and simple interface.

---

## 1. **Project Setup & Demo**

### **Web Setup**
```bash
npm install
npm start
```
This launches the development server at `http://localhost:3000/`.

### **Mobile Setup (if adapted to React Native / Native code)**

#### **iOS**
- Open the project in **Xcode**.
- Run on a simulator or physical device.

#### **Android**
```bash
./gradlew assembleDebug
```
Or run directly through **Android Studio**.

### **Demo**
Live Web Demo: *(https://quiz-wise-khaki.vercel.app/login)*

You may also attach a **screen recording** if running the mobile version.

---

## 2. **Problem Understanding**
The goal was to create a simple, user‑friendly quiz application that:
- Allows users to log in.
- Lets them choose a quiz topic.
- Fetches questions and answers using an AI API.
- Shows results at the end.

### **Assumptions Made**
- Topics are predefined and shown on the UI.
- AI API always returns valid questions and options.
- The app does not require user authentication persistence.
- Basic UI/UX is sufficient for the scope.

---

## 3. **AI Prompts & Iterations**
During development, multiple prompts were used to refine quiz generation.

### **Initial Prompt**
- "Generate 5 multiple‑choice questions on {topic}."

### **Issues Faced**
- Sometimes API returned incomplete or malformed JSON.
- Options were inconsistent in structure.
- Some questions did not include correct answers.

### **Refined Prompt**
- "Generate exactly 5 questions in consistent JSON format: [{ question, options: [A,B,C,D], answer }]. Ensure all fields are present."

This produced more reliable quiz structures.

---

## 4. **Architecture & Code Structure**

### **Navigation Manager**
- **Web:** `App.js` manages routing between Login → Topic Selector → Quiz Screen → Result Screen.
- **Mobile (if applicable):** `NavigationHost` or stack navigator handles screen flow.

### **Screens / Components**
- ![Login Screen](https://res.cloudinary.com/dpypal26y/image/upload/v1764874866/Screenshot_2025-12-05_002857_fg8skq.png)

### Topic Selector
- ![Topic Selector](https://res.cloudinary.com/dpypal26y/image/upload/v1764874865/Screenshot_2025-12-05_002815_ckmud1.png)

### Quiz Screen
- ![Quiz Screen](https://res.cloudinary.com/dpypal26y/image/upload/v1764874865/Screenshot_2025-12-05_002831_lii83s.png)

### Result Screen
- ![Result Screen](https://res.cloudinary.com/dpypal26y/image/upload/v1764874865/Screenshot_2025-12-05_002850_xbjxt6.png)
- Shared UI components (buttons, loaders, etc.)

### **AI Integration**
- **Web:** `aiService.js` handles API calls.
- **iOS:** `AIClient.swift`.
- **Android:** `AIRepository.kt`.

### **State Management**
- **Web:** React Context + useState.
- **iOS:** SwiftUI `ObservableObject`.
- **Android:** Jetpack `ViewModel`.

---

## 5. **Screenshots / Screen Recording**
Include screenshots of:
- Login screen
- Topic selection
- Quiz questions
- Results screen

Or a complete screen recording (mobile setup).

---

## 6. **Known Issues / Improvements**
### **Known Issues**
- API sometimes returns inconsistent data.
- No backend authentication.
- Limited error handling if question fetch fails.
- UI is functional but minimal.

### **Future Improvements**
- Add persistent login.
- Store quiz history.
- Improve UI with animations and better layout.
- Add a progress bar for quiz.
- Add difficulty levels.

---

## 7. **Bonus Work**
- Clean UI styling.
- Basic transitions between screens.
- Deployed version hosted on Vercel.
- Added loader animation while fetching AI questions.

---

### **Thank You!**
For any inquiries or improvements, feel free to contribute or open an issue.

