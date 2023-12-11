const path = require('path')
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
// Import router từ file index.js
const user = require('./routes/user.routes')
const post = require('./routes/post.routes')
const read = require('./routes/read.routes')
const store = require('./routes/store.routes')
const staff = require('./routes/staff.routes')
const menu = require('./routes/menu.routes')
// Sử dụng router với prefix /api
const app = express();
const server = http.createServer(app);
// ewr
require('./socket/index')(server)
// app.use(express.static(path.join(__dirname, 'public')));
// Phân tích nội dung yêu cầu từ dạng JSON
app.use(cors());
// Phân tích nội dung yêu cầu từ dạng x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use('/api/user', user);
// app.use('/api/user', user);
app.use('/api/read', read);
app.use('/api/store', store);
app.use('/api/staff', staff);
app.use('/api/menu', menu);
// build mới 
const db = require("./utils/db");
var sequelize = db.sequelize
sequelize.sync({ force: true }).then(() => {
    console.log('Bảng đã được tạo hoặc cập nhật.');
  });


// Khi có một kết nối mới được thiết lập
const PORT = 1234;

server.listen(PORT, () => console.log(`Server running on port localhost:${PORT}`));
