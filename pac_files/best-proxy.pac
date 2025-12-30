function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.164.226.253:4216",
        "SOCKS 135.181.203.208:80",
        "SOCKS 123.16.15.41:1452",
        "SOCKS 103.15.214.20:8080",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 67.43.236.22:30177",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 67.43.236.19:21085",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 154.64.224.236:8080",
        "SOCKS 103.239.201.50:58765",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 80.85.245.5:5555",
        "SOCKS 103.78.201.242:3128",
        "SOCKS 203.189.154.80:1080",
        "SOCKS 72.10.160.94:26499",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 31.211.142.115:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}