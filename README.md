## Install Instruction

### `Login Credentials  `
email: admin@demo.com<br/>
password: 12345678<br/> 

### `Front-End setup`

Clone or download the project<br/>
Open your terminal and redirect to the folder (project) directory.<br/>
npm install<br/>
npm audit fix (Note: not necessary)<br/>

### `Back-End setup`

Create .env file in your root directory<br/>
Copy your FirebaseConfig and add value<br/>

**Note: Please add only value to the below code **<br>

REACT_APP_FIREBASE_API_KEY = "your api key"<br/>
REACT_APP_FIREBASE_AUTH_DOMAIN = ""<br/>
REACT_APP_FIREBASE_DATABASE_URL = ""<br/>
REACT_APP_FIREBASE_PROJECT_ID = ""<br/>
REACT_APP_FIREBASE_STORAGE_BUCKET = ""<br/>
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = ""<br/>
REACT_APP_FIREBASE_APP_ID = ""<br/>
REACT_APP_FIREBASE_MEASUREMENT_ID = ""<br/>

## Troubleshooting

In case firebase db is not working replace it with the sample data. <br/>

Redirect to commit - "Replaced sample data with Db products data on home container"<br/>
