function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 121.128.121.244:3128",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.195.6.226:30048",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 125.128.12.44:3128",
        "SOCKS 51.15.20.32:1088",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 213.21.233.242:1080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 174.138.62.182:43715",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}