function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.253:5031",
        "SOCKS 62.60.131.204:14150",
        "SOCKS 36.255.98.181:5411",
        "SOCKS 221.163.14.232:10080",
        "SOCKS 36.255.98.167:11722",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 62.60.131.204:4642",
        "SOCKS 62.60.131.205:4266",
        "SOCKS 36.255.98.161:4359",
        "SOCKS 36.255.98.163:7417",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 36.255.98.160:7023",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 36.255.98.160:16955",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 62.60.131.253:4094",
        "SOCKS 185.38.111.1:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}