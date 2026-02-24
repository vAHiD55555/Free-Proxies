function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 204.93.169.232:60755",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 121.128.121.184:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 152.32.255.24:27197",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 157.20.252.30:8080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 18.141.177.23:80",
        "SOCKS 119.81.189.194:80",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}