function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:4189",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 36.255.98.161:5703",
        "SOCKS 62.60.131.253:6347",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 8.212.153.179:8080",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 212.127.94.122:3128",
        "SOCKS 62.60.131.205:5441",
        "SOCKS 205.172.58.121:3128",
        "SOCKS 62.60.131.204:4878",
        "SOCKS 36.255.98.163:4083",
        "SOCKS 62.60.131.205:4959",
        "SOCKS 36.255.98.168:4481",
        "SOCKS 62.60.131.204:5882",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}