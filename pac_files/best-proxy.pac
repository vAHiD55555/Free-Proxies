function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.84.215.127:3256",
        "SOCKS 83.219.250.8:62920",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 123.54.197.19:21361",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 62.113.119.14:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}