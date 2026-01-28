function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 40.192.100.189:7809",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 81.177.166.169:10808",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 36.255.98.165:4201",
        "SOCKS 195.175.31.222:8080",
        "SOCKS 62.60.131.203:5083",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 36.255.98.180:10349",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 62.60.131.203:4054",
        "SOCKS 36.255.98.180:8970",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 103.187.86.14:8085",
        "SOCKS 67.43.228.252:15821",
        "SOCKS 102.217.190.157:7080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}