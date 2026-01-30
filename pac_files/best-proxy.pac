function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.253:5031",
        "SOCKS 8.220.149.222:80",
        "SOCKS 47.239.176.7:1024",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 36.255.98.184:4149",
        "SOCKS 62.60.131.193:33611",
        "SOCKS 62.60.131.204:8131",
        "SOCKS 210.75.240.178:4781",
        "SOCKS 3.24.178.81:80",
        "SOCKS 62.60.131.203:4888",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 220.152.115.94:6000",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 36.255.98.179:7880",
        "SOCKS 5.255.117.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}