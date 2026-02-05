function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.219.236.127:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 83.239.34.82:8080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 110.74.195.34:25",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 15.168.235.57:12185",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 217.154.207.198:1080",
        "SOCKS 45.78.192.15:3128",
        "SOCKS 65.21.201.149:8080",
        "SOCKS 193.106.150.70:1080",
        "SOCKS 101.91.242.198:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}