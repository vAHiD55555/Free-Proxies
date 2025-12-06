function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.233.78.142:42495",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 43.162.117.120:3128",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 67.43.228.254:22945",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 38.253.88.242:999",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 45.77.99.40:8990",
        "SOCKS 41.216.186.146:7777",
        "SOCKS 109.230.92.50:3128",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 51.15.223.12:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}