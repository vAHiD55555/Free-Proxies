function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 66.135.227.178:4145",
        "SOCKS 36.255.98.163:4599",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 141.98.188.201:2080",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 185.210.85.26:56981",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 202.142.178.206:1080",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 103.78.98.74:8888",
        "SOCKS 139.59.24.173:1080",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 212.33.248.45:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}