function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.126.103.194:44214",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.151.74.5:2025",
        "SOCKS 62.60.131.186:21458",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 18.141.177.23:80",
        "SOCKS 189.50.45.46:1995",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.178.42:2589",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 5.78.129.58:9001",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 45.189.252.240:999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}