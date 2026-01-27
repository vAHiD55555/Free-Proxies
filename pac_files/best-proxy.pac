function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.98.211:16379",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 36.255.98.178:6935",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 36.255.98.178:8028",
        "SOCKS 36.255.98.176:4550",
        "SOCKS 66.70.235.23:5454",
        "SOCKS 62.60.131.203:5264",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 94.130.24.194:3534",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}