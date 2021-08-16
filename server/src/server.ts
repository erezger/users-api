import app from './app';
import {PORT} from './constants/users-api.constants';

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
