import * as http from 'http';
import 'dotenv/config';

const PORT = process.env.SERVER_PORT || 5600;
const server = http.createServer();
server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});