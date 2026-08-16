function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.45.245.39:1080",
        "SOCKS 91.246.1.6:4433",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 164.52.216.68:8080",
        "SOCKS 140.245.36.86:1080",
        "SOCKS 171.253.95.3:2102",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 80.55.169.2:80",
        "SOCKS 46.173.26.104:1080",
        "SOCKS 201.184.165.91:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 45.133.16.88:1080",
        "SOCKS 84.235.235.131:1080",
        "SOCKS 5.188.206.94:995",
        "SOCKS 45.77.37.39:2021",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 65.21.252.66:10801",
        "SOCKS 45.77.37.39:2078",
        "SOCKS 46.101.36.247:9050",
        "SOCKS 47.236.20.209:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}