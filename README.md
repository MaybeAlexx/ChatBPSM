# Study With BPSM

Welcome to the "Study With BPSM" project! This website is designed to provide an interactive study experience, featuring a chatbot powered by Gemini's API to assist users with their study-related questions.

## Project Structure

The project is organized as follows:

```
study-with-bpsm-website
├── src
│   ├── css
│   │   └── styles.css        # Custom styles using Tailwind CSS
│   ├── js
│   │   ├── main.js           # Main JavaScript file for website functionality
│   │   └── chatbot.js        # JavaScript file for chatbot integration
│   └── index.html            # Main HTML file for the website
├── package.json               # npm configuration file
├── tailwind.config.js         # Tailwind CSS configuration file
└── README.md                  # Project documentation
```

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   cd study-with-bpsm-website
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Build the Tailwind CSS:
   ```
   npx tailwindcss -i ./src/css/styles.css -o ./dist/styles.css --watch
   ```

4. Open the `src/index.html` file in your browser to view the website.

## Usage

The website features a chatbot that can answer various study-related questions. Simply type your question into the chatbot interface, and it will respond with helpful information.

## Contributing

If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Tailwind CSS for styling
- GSAP for animations
- Gemini's API for chatbot functionality

Feel free to reach out if you have any questions or suggestions!