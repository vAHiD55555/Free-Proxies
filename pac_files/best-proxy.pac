function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:45801",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 67.43.228.250:16043",
        "SOCKS 89.58.45.94:32187",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 74.48.187.168:3128",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 103.162.54.147:8080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 49.0.26.183:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 157.180.121.252:42955",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 89.39.83.204:80",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 37.221.193.221:10135",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}