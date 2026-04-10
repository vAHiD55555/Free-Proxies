function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.36.190:1088",
        "SOCKS 119.81.71.27:80",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 185.76.240.137:10001",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 206.123.156.226:5375",
        "SOCKS 206.123.156.181:6309",
        "SOCKS 206.123.156.227:5011",
        "SOCKS 94.130.16.48:30053",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 206.123.156.204:4551",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 206.123.156.215:4698",
        "SOCKS 205.185.120.241:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}