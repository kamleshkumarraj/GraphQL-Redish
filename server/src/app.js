import express from 'express';
import cors from 'cors';

export const app = express();


app.use(cors({
    origin : ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow cookies to be sent with requests
}))

app.use(express.json({
    limit: '10mb',
}))

app.use(express.urlencoded({
    extended: true,
    limit: '10kb',
}));

// code for handle the unrejected promises.
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    process.exit(1); // Exit the process with a failure code
    // Optionally, you can log the error to a file or monitoring service here
});

// code for handle the uncaught exceptions.
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1); // Exit the process with a failure code
    // Optionally, you can log the error to a file or monitoring service here
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    
    return res.status(statusCode).json({
        success : false,
        message
    });
})