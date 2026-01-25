function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.99.30.237:5062",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 193.181.35.161:8118",
        "SOCKS 158.160.133.16:8087",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 195.250.31.18:80",
        "SOCKS 62.60.131.205:5342",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 62.60.131.203:4242",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 88.99.27.22:5082",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 65.109.217.101:3534",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}