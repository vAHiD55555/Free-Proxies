function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 72.10.160.94:11791",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 217.150.43.249:8080",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 202.40.178.234:64564",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 61.49.87.3:80",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 116.80.80.188:3172",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}