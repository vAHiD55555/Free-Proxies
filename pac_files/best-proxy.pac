function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 162.144.74.156:3620",
        "SOCKS 103.169.254.155:1080",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 187.94.16.59:39665",
        "SOCKS 152.70.236.84:1080",
        "SOCKS 5.102.109.41:999",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 152.228.163.79:80",
        "SOCKS 46.10.229.243:7777",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 115.127.107.106:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}