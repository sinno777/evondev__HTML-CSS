1. Setup git
    - what/why
    - cài đặt git (check chuột phải, option git bash)
    - create github account
    - setup username/email

2. Tạo project với git
- clone 1 project có sẵn
    => git clone link_https

- Tạo 1 project trên github
    Tạo 1 github repository (folder) - nơi chứa code
    Clone project này:  git clone link_your_repo
    Viết code
    git status ( kiểm tra trạng thái files)
    git add .  (thêm files)
    git commit  -m “your_message”  (tạo nội dung commit)
    git push origin main

- Tạo project local và đẩy lên github
    Tạo 1 github repo
    git init
    Viết code
    git status
    git add .
    git commit -m “your message”
    git remote add origin https://…..
    git push origin master




3. Https vs  ssh
    ssh-keygen -t ed25519 -C "your_email@example.com"

    Note: If you are using a legacy system that doesn't support the Ed25519 algorithm, use:
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"


4. Các câu lệnh thường dùng
- Mô hình hoạt động của Git

    git status
    git add
    git commit 
    git push


5. Làm việc nhóm
    git pull = git fetch + git merge
    git merge
    git conflict
    git checkout branch/commit

    git checkout -b branch_name (tạo mới 1 branch)
    git checkout branch_name (check code tại 1 branch đã tạo)
