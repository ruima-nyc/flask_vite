import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { io, Socket } from 'socket.io-client';

const StreamingResults: React.FC = () => {
    const [results, setResults] = useState<string[]>([]);
    const [param1, setParam1] = useState<string>('');
    const [connected, setConnected] = useState<boolean>(false);
    let socket: Socket;

    useEffect(() => {
        // Initialize Socket.IO connection
        socket = io('localhost:5555', { secure: false });

        socket.on('connect', () => {
            console.log('Connected to server via Socket.IO');
            setConnected(true);
        });

        // Listen for streaming data from the server
        socket.on('data', (data: string) => {
            setResults(prevResults => [...prevResults, data]);
            console.log('Received data:', data);
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
            setConnected(false);
        });

        // Clean up the socket connection when the component unmounts
        return () => {
            socket.disconnect();
        };
    }, []);

    const runTemplate = async () => {
        try {
            const response = await axios.post('http://localhost:5555/runTemplate', {
                param1: param1, // Use the state value for param1 in the POST request
                param2: 'value2', // Static value for demonstration
            });
            console.log('POST response:', response.data);
        } catch (error) {
            console.error('Error sending POST request:', error);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setParam1(e.target.value);
    };

    return (
        <div>

            <div>
                <label htmlFor="param1Input">Instructions for the output:</label>
                <input
                    id="param1Input"
                    type="text"
                    value={param1}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={runTemplate} disabled={!connected} class="next-row">
            Let's crunch the numbers.
            </button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default StreamingResults;
