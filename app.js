document.addEventListener("DOMContentLoaded", function () {
    const bootwin = () => {
        document.getElementById("boot").style.display = "none";
        document.getElementById("win98").style.display = "block";
    }
    setTimeout(bootwin, 2000);
    const fill = (number) => number < 10 ? number = "0" + number : number;
    const getTime = () => {
        let date = new Date();
        document.getElementById("taskbar-notification").innerHTML = fill(date.getHours()) + ":" + fill(date.getMinutes());
    }
    setInterval(getTime, 100);
    let is_error = false;
    const err_s = () => {
        var audio = document.getElementById("audio");
        audio.play();
    }
    let desktop = document.getElementById("win98");
    let start_bar = document.getElementById("start-bar");
    let start = document.getElementById("start");
    let start_menu = document.getElementById("start-menu");
    let task_icons = document.getElementById("taskbar-icons");
    start.addEventListener("click", function () {
        if (!is_error) {
            if (start_menu.style.display == "none") {
                start_menu.style.display = "block";
            } else {
                start_menu.style.display = "none";
            }
        } else err_s();
    })
    let Render = (type, attr, value) => {
        let obj = document.createElement(type);
        obj.setAttribute(attr, value);
        return obj;
    }
    let Image = (value) => {
        let obj = document.createElement("img");
        obj.setAttribute("src", value);
        return obj;
    }
    let Div = (value1, value2) => {
        let obj = document.createElement("div");
        obj.setAttribute("class", value1);
        value2 == null ? obj.setAttribute("class", value1) : obj.setAttribute("id", value2);
        return obj;
    }
    let Node = (type, text) => {
        let obj = document.createElement(type);
        obj.innerHTML = text;
        return obj;
    }
    const blueS = () => {
        desktop.style.display = "none";
        start_bar.style.display = "none";
        err_s();
        let blue = Div("bs");
        blue.appendChild(Node("p", "Windows"));
        blue.appendChild(Node("p", "A fatal excpetion 0E has occurred at 0028:C004D86F in VXD VFAT(01)<br>The current application will be termindated."));
        let ul = document.createElement("ul");
        ul.appendChild(Node("li", "Press any key taskbar-icons terminate the current application."));
        ul.appendChild(Node("li", "Press CTRLT+ALT+DEL to restart your computer. You will lose any unsaved information in all applications."));
        blue.appendChild(ul);
        blue.appendChild(Node("p", "Press any key to continue"));
        let bt = document.createElement("button");
        bt.innerHTML = "Restart";
        blue.appendChild(bt);
        bt.addEventListener("click", function () {
            blue.remove();
            start_bar.style.display = "block";
            desktop.style.display = "block";
        })
        document.getElementsByTagName("body")[0].appendChild(blue);
    }

    class WindError {
        constructor(title, img, message, btns) {
            this.title = title;
            this.img = img;
            this.message = message;
            this.btns = btns;
        }
        show() {
            let winderror = Div("winderror");
            let headererr = Div("winderror-header");
            headererr.innerHTML = this.title;
            let closeerr = Render("span", "class", "winderror-close");
            closeerr.innerHTML = "x";
            headererr.appendChild(closeerr);
            winderror.appendChild(headererr);
            let content = Div("winderror-content");
            let img = Image(this.img);
            content.appendChild(img);
            let mess = document.createElement("div");
            mess.setAttribute("class", "winderror-mess");
            mess.innerHTML = this.message;
            content.appendChild(mess);
            winderror.appendChild(content);
            let btns_div = document.createElement("div");
            if (this.btns === 1) {
                btns_div.setAttribute("class", "winderror-button");
                let btn = document.createElement("button");
                btn.innerHTML = "OK";
                btns_div.appendChild(btn);
            } else {
                btns_div.setAttribute("class", "winderror-buttons");
                let btn1 = document.createElement("button");
                let btn2 = document.createElement("button");
                btn1.innerHTML = "<u>R</u>etry";
                btn1.addEventListener("click", function () {
                    err_s();
                })
                btn2.innerHTML = "<b>C</b>ancel";
                btn2.addEventListener("click", function () {
                    winderror.remove();
                    is_error = false;
                })
                btns_div.appendChild(btn1);
                btns_div.appendChild(btn2);
            }
            winderror.appendChild(btns_div);
            err_s();
            desktop.appendChild(winderror);
            closeerr.addEventListener("click", function () {
                winderror.remove();
                is_error = false;
            })
        }
    }
    class Window {
        constructor(title, type, img) {
            this.title = title;
            this.type = type;
            this.img = img;
        }
        open() {
            let window = Div("window", this.type);
            let header = Div("window-header");
            let header_img = Image(this.img);
            let close = Render("span", "class", "header-close");
            close.innerHTML = "x";
            header.appendChild(close);
            let min = Render("span", "class", "header-minimize");
            min.innerHTML = "_";
            header.appendChild(min);
            let resize = Render("span", "class", "header-resize");
            resize.innerHTML = "◳";
            header.appendChild(resize);
            header.appendChild(header_img);
            let span = Render("span", "class", "window-header-p");
            span.innerHTML = this.title;
            header.appendChild(span);
            window.appendChild(header);
            let win_menu = Div("window-menu");
            let ul = document.createElement("ul");
            let file = Node("li", "<u>F</u>ile");
            ul.appendChild(file);
            let edit = Node("li", "<u>E</u>dit");
            ul.appendChild(edit);
            let view = Node("li", "<u>V</u>iew");
            ul.appendChild(view);
            let go = Node("li", "<u>G</u>o");
            ul.appendChild(go);
            let favorites = Node("li", "<u>F</u>avorites");
            ul.appendChild(favorites);
            let help = Node("li", "<u>H</u>elp");
            ul.appendChild(help);
            win_menu.appendChild(ul);
            let logo = Image("https://i.ibb.co/4WdrJQ5/logo.png");
            logo.setAttribute("class", "logo");
            win_menu.appendChild(logo);
            window.appendChild(win_menu);
            let nav = Div("window-nav");
            let n1 = Image("https://i.ibb.co/m83t0qg/bacjuti.png");
            let n2 = Image("https://i.ibb.co/f2YhpRH/nav-for.png");
            let n3 = Image("https://i.ibb.co/PGbtsgd/nav-up.png");
            let b1 = Image("https://i.ibb.co/xzqz2tw/nav-bar.png");
            let n4 = Image("https://i.ibb.co/mSx3CvV/nav-cut.png");
            let n5 = Image("https://i.ibb.co/Dz3PSDr/nav-cpy.png");
            let n6 = Image("https://i.ibb.co/SBRM2jF/nav-past.png");
            let b2 = Image("https://i.ibb.co/xzqz2tw/nav-bar.png");
            let n7 = Image("https://i.ibb.co/z7vQx8y/nav-undo.png");
            let b3 = Image("https://i.ibb.co/xzqz2tw/nav-bar.png");
            let n8 = Image("https://i.ibb.co/0hHmmg3/nav-del.png");
            let n9 = Image("https://i.ibb.co/QcHhW6D/nav-prop.png");
            let b4 = Image("https://i.ibb.co/xzqz2tw/nav-bar.png");
            let n10 = Image("https://i.ibb.co/LZ60RKg/nav-vire.png");
            nav.appendChild(n1);
            nav.appendChild(n2);
            nav.appendChild(n3);
            nav.appendChild(b1);
            nav.appendChild(n4);
            nav.appendChild(n5);
            nav.appendChild(n6);
            nav.appendChild(b2);
            nav.appendChild(n7);
            nav.appendChild(b3);
            nav.appendChild(n8);
            nav.appendChild(n9);
            nav.appendChild(b4);
            nav.appendChild(n10);
            window.appendChild(nav);
            let wind_adress = Div("window-address");
            let add_text = Node("span", "A<u>d</u>dress");
            add_text.setAttribute("class", "addresss-text");
            wind_adress.appendChild(add_text);
            let add_sec = document.createElement("div");
            add_sec.setAttribute("class", "addbar");
            let add_img = Image(this.img);
            add_sec.appendChild(add_img);
            let add;
            let wind_content = Div("wind-content");
            let imgw = Render("img", "class", "backg-mycom");
            let list_icons = Div("icons-comp");
            switch (this.type) {
                case "My Computer":
                    imgw.setAttribute("src", "https://i.ibb.co/2S75bpY/mycompf.png");
                    let flop = Image("https://i.ibb.co/WkSxgbm/mycomff.png");
                    add = Node("span", this.type);
                    flop.addEventListener("click", function () {
                        if (!is_error) {
                            is_error = true;
                            let win = new WindError("My Computer", "https://i.ibb.co/RDTpHPQ/err.png", "A:\\ is no accessible.<br>The device is not ready.", 2);
                            win.show();
                        }
                    })
                    list_icons.appendChild(flop);
                    let hdd = Image("https://i.ibb.co/8Dfv2Vy/comfc.png");
                    hdd.addEventListener("click", function () {
                        if (!is_error) {
                            list_icons.style.display = "none";
                            let list_icons2 = Div("icons-comp");
                            list_icons2.appendChild(Image("https://i.ibb.co/DDnMr4K/docs-icon.png"));
                            list_icons2.appendChild(Image("https://i.ibb.co/rsvF7g4/pf-icon.png"));
                            list_icons2.appendChild(Image("https://i.ibb.co/jwZ3dm1/wind-icon.png"));
                            list_icons2.appendChild(Image("https://i.ibb.co/PcZ8hjG/ax-ico.png"));
                            list_icons2.appendChild(Image("https://i.ibb.co/BnxjzzJ/ax2-ico.png"));
                            wind_content.appendChild(list_icons2);               
                            n1.addEventListener("click", function () {
                                list_icons2.style.display = "none";
                                list_icons.style.display = "block";
                            })
                        } else err_s();
                    })
                    list_icons.appendChild(hdd);
                    let cd = Image("https://i.ibb.co/mq7c1jn/compfcd.png");
                    cd.addEventListener("click", function () {
                        if (!is_error) {
                            is_error = true;
                            let win = new WindError("My Computer", "https://i.ibb.co/RDTpHPQ/err.png", "D:\\ is no accessible.<br>The device is not ready.", 2);
                            win.show();
                        } else err_s();
                    })
                    list_icons.appendChild(cd);
                    list_icons.appendChild(Image("https://i.ibb.co/28PBBdN/compfcp.png"));
                    wind_content.appendChild(imgw);
                    wind_content.appendChild(list_icons);
                    break;
                case "My Documents":
                    imgw.setAttribute("src", "https://i.ibb.co/MRvPPm4/mydocf.png");
                    let folder = Image("https://i.ibb.co/bJSCHnV/mypicico.png");
                    add = Node("span", this.type);
                    folder.addEventListener("click", function () {
                        folder.style.display = "none";
                        let imgs = Div("pictures");
                        imgs.appendChild(Div("thumb1"));
                        imgs.appendChild(Div("thumb2"));
                        list_icons.appendChild(imgs);
                        n1.addEventListener("click", function () {
                            imgs.style.display = "none";
                            folder.style.display = "block";
                        })
                    })
                    list_icons.appendChild(folder);
                    wind_content.appendChild(imgw);
                    wind_content.appendChild(list_icons);
                    break;
                case "Internet Explorer":
                    add = Node("span", "http://wwww.google.com/");
                    let webpage = Div("webpage");

                    let google = Image("https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png");
                    let header = Div("webpage-header");
                    header.appendChild(google);
                    let search = Div("search");
                    webpage.appendChild(header);
                    search.appendChild(Node("p", "Search the web using Google!"));
                    search.appendChild(Render("input", "class", "input-search"));
                    let btn = Div("btns-google");
                    let btn1 = Render("input", "type", "button");
                    btn1.value = "Google Search";
                    
                    let btn2 = Render("input", "type", "button");
                    btn2.value = "I'm feeling lucky";
                    btn.appendChild(btn1);
                    btn.appendChild(btn2);
                    search.appendChild(btn);
                    webpage.appendChild(search);
                    webpage.appendChild(Node("p", "Copyright &copy;1998 Google Inc."));
                    wind_content.appendChild(webpage);
                    break;
                case "Network":
                    add = Node("span", this.type);
                    imgw.setAttribute("src", "https://i.ibb.co/TMr2G92/cpfnet.png");
                    wind_content.appendChild(imgw);
                    setTimeout(blueS, 400);
                    break;
                case "Recycle Bin":
                    add = Node("span", this.type);
                    imgw.setAttribute("src", "https://i.ibb.co/g99RmxB/rccomi.png");
                    wind_content.appendChild(imgw);
                    break;
            }
            add_sec.appendChild(add);
            wind_adress.appendChild(add_sec);
            window.appendChild(wind_adress);
            window.appendChild(wind_content);
            let task = Div("task", this.type);
            task.addEventListener("click", function () {
                if (!is_error) {
                    if (window.classList.contains("minimize")) {
                        window.classList.remove("minimize");
                        window.classList.add("zindex");
                    } else {
                        window.classList.add("minimize");
                        window.classList.remove("zindex");
                    }
                } else err_s();
            })
            let task_img = Image(this.img);
            task.appendChild(task_img);
            task_icons.appendChild(task);
            min.addEventListener("click", function () {
                if (!is_error) {
                    window.classList.add("minimize");
                    window.classList.remove("zindex");
                } else err_s();
            })
            close.addEventListener("click", function () {
                if (!is_error) {
                    let tasks = document.getElementsByClassName("task");
                    for (let i = 0; i < tasks.length; i++) {
                        if (tasks[i].id == span.innerHTML) {
                            tasks[i].remove();
                        }
                    }
                    window.remove();
                } else err_s();
            })
            desktop.appendChild(window);
        }
    }
    class Icon {
        constructor(name, logo) {
            this.name = name;
            this.logo = logo;
        }
        draw() {
            let div = Div("icon"),
                img = Image(this.logo),
                p = Node("p", this.name);
            div.addEventListener("click", function () {
                let win = new Window(p.innerHTML, p.innerHTML, img.src);
                win.open();
            })
            div.appendChild(img);
            div.appendChild(p);
            desktop.appendChild(div);
        }
    }
    let icons_names = ["My Computer", "My Documents", "Internet Explorer", "Network", "Recycle Bin"]
    let logos = ["https://i.ibb.co/Fz7XL7z/my-computer.png", "https://i.ibb.co/TgXLNyp/my-docs.png",
        "https://i.ibb.co/bHmmSH9/internet.png", "https://i.ibb.co/1L9h6cV/net.png", "https://i.ibb.co/syBDpgj/rb.png"]
    for (let icon = 0; icon < 5; icon++) {
        let obj = new Icon(icons_names[icon], logos[icon]);
        obj.draw();
    }
})