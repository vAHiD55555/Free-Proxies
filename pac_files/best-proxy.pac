function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.153.141.90:4216",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 119.81.189.194:80",
        "SOCKS 110.235.255.21:1080",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 45.184.103.110:999",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 185.112.224.151:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}