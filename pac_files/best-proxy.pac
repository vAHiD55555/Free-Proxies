function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.98.82.63:1080",
        "SOCKS 62.133.62.18:1082",
        "SOCKS 217.76.54.178:9052",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 47.76.171.214:3128",
        "SOCKS 81.168.119.85:443",
        "SOCKS 216.48.184.253:8080",
        "SOCKS 141.147.10.92:555",
        "SOCKS 192.238.177.213:1081",
        "SOCKS 116.96.32.160:1081",
        "SOCKS 80.78.25.87:9050",
        "SOCKS 47.82.78.113:1011",
        "SOCKS 91.185.60.226:1080",
        "SOCKS 45.118.146.219:1080",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 193.179.52.197:3128",
        "SOCKS 31.187.64.243:10086",
        "SOCKS 185.175.229.58:1080",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 171.253.95.3:1120",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}