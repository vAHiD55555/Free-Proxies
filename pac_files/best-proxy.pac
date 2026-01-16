function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.135.140:1080",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 36.255.98.182:4126",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 188.166.34.137:9000",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 47.119.22.156:8081",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}