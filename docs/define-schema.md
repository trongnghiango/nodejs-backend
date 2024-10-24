Dưới đây là cách chuyển đổi các trường trong `adminSchema` của bạn thành một schema tương ứng trong PostgreSQL:

## admin Schema

```sql
CREATE TABLE admin (
    id SERIAL PRIMARY KEY,
    removed BOOLEAN DEFAULT FALSE,
    enabled BOOLEAN DEFAULT FALSE,
    email VARCHAR(255) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    surname VARCHAR(255),
    photo VARCHAR(255),
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    role VARCHAR(50) DEFAULT 'owner' CHECK (role IN ('owner'))
);
```

### Giải Thích Các Trường

1. **id**:

   - Sử dụng `SERIAL` để tạo một trường tự động tăng cho khóa chính.

2. **removed**:

   - Kiểu `BOOLEAN` với giá trị mặc định là `FALSE`.

3. **enabled**:

   - Kiểu `BOOLEAN` với giá trị mặc định là `FALSE`.

4. **email**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL` và `UNIQUE` để đảm bảo rằng không có email trùng lặp.

5. **name**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL`.

6. **surname**:

   - Kiểu `VARCHAR(255)`, không bắt buộc.

7. **photo**:

   - Kiểu `VARCHAR(255)`, không bắt buộc.

8. **created**:

   - Kiểu `TIMESTAMP` với giá trị mặc định là thời gian hiện tại khi bản ghi được tạo (`CURRENT_TIMESTAMP`).

9. **role**:
   - Kiểu `VARCHAR(50)` với giá trị mặc định là `'owner'` và ràng buộc `CHECK` để giới hạn các giá trị có thể.

## adminPassword Schema

```sql
CREATE TABLE admin_password (
    id SERIAL PRIMARY KEY,
    removed BOOLEAN DEFAULT FALSE,
    user_id INTEGER NOT NULL UNIQUE REFERENCES admin(id) ON DELETE CASCADE,
    password VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
    email_token VARCHAR(255),
    reset_token VARCHAR(255),
    email_verified BOOLEAN DEFAULT FALSE,
    auth_type VARCHAR(50) DEFAULT 'email',
    logged_sessions TEXT[] DEFAULT ARRAY[]::TEXT[]
);
```

### Giải Thích Các Trường

1. **id**:

   - Sử dụng `SERIAL` để tạo một trường tự động tăng cho khóa chính.

2. **removed**:

   - Kiểu `BOOLEAN` với giá trị mặc định là `FALSE`.

3. **user_id**:

   - Kiểu `INTEGER`, không bắt buộc. Sử dụng `REFERENCES admin(id)` để tạo khóa ngoại đến bảng `admin`. Ràng buộc `UNIQUE` đảm bảo rằng mỗi người dùng chỉ có một bản ghi mật khẩu.

4. **password**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL`.

5. **salt**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL`.

6. **email_token**:

   - Kiểu `VARCHAR(255)`, không bắt buộc.

7. **reset_token**:

   - Kiểu `VARCHAR(255)`, không bắt buộc.

8. **email_verified**:

   - Kiểu `BOOLEAN` với giá trị mặc định là `FALSE`.

9. **auth_type**:

   - Kiểu `VARCHAR(50)` với giá trị mặc định là `'email'`.

10. **logged_sessions**:
    - Kiểu `TEXT[]` để lưu trữ mảng các phiên đăng nhập, với giá trị mặc định là mảng rỗng (`ARRAY[]::TEXT[]`).

### email Schema

```sql
CREATE TABLE email (
    id SERIAL PRIMARY KEY,
    removed BOOLEAN DEFAULT FALSE,
    enabled BOOLEAN DEFAULT TRUE,
    email_key VARCHAR(255) NOT NULL UNIQUE,
    email_name VARCHAR(255) NOT NULL,
    email_variables TEXT[], -- Sử dụng mảng để lưu trữ các biến email
    email_body TEXT NOT NULL,
    email_subject VARCHAR(255) NOT NULL,
    language VARCHAR(50) DEFAULT 'us_en',
    created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Giải Thích Các Trường

1. **id**:

   - Sử dụng `SERIAL` để tạo một trường tự động tăng cho khóa chính.

2. **removed**:

   - Kiểu `BOOLEAN` với giá trị mặc định là `FALSE`.

3. **enabled**:

   - Kiểu `BOOLEAN` với giá trị mặc định là `TRUE`.

4. **email_key**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL` và `UNIQUE` để đảm bảo rằng không có giá trị trùng lặp.

5. **email_name**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL`.

6. **email_variables**:

   - Kiểu `TEXT[]` để lưu trữ mảng các biến email. PostgreSQL hỗ trợ kiểu mảng, nên bạn có thể sử dụng nó để lưu trữ các giá trị động.

7. **email_body**:

   - Kiểu `TEXT` với ràng buộc `NOT NULL`.

8. **email_subject**:

   - Kiểu `VARCHAR(255)` với ràng buộc `NOT NULL`.

9. **language**:

   - Kiểu `VARCHAR(50)` với giá trị mặc định là `'us_en'`.

10. **created**:

    - Kiểu `TIMESTAMP` với giá trị mặc định là thời gian hiện tại (`CURRENT_TIMESTAMP`).

11. **updated**:
    - Kiểu `TIMESTAMP` với giá trị mặc định là thời gian hiện tại (`CURRENT_TIMESTAMP`). Bạn có thể cần cập nhật trường này mỗi khi bản ghi được sửa đổi.
