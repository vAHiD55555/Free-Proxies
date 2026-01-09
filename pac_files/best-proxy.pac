function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.172.165:8811",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 62.133.62.12:1081",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 13.229.47.109:80",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 179.60.53.26:999",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 88.99.10.252:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}