function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 43.167.254.69:6006",
        "SOCKS 43.167.252.56:6006",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 62.60.131.186:44543",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 138.199.25.13:3904",
        "SOCKS 43.167.173.161:6006",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 47.91.109.17:6969",
        "SOCKS 47.238.203.170:50000",
        "SOCKS 140.246.125.194:9099",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 124.115.21.11:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}