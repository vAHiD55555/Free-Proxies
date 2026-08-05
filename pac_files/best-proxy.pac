function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.24.111.128:1088",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 170.106.177.188:47783",
        "SOCKS 203.25.208.163:1515",
        "SOCKS 45.150.33.211:1081",
        "SOCKS 140.245.53.190:1088",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 202.78.167.58:9050",
        "SOCKS 202.79.27.12:1080",
        "SOCKS 47.250.115.134:1080",
        "SOCKS 103.161.104.99:1080",
        "SOCKS 193.124.91.150:1024",
        "SOCKS 213.165.43.73:46650",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 47.254.36.213:9080",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 176.65.140.212:1085",
        "SOCKS 223.25.110.123:8080",
        "SOCKS 47.82.112.38:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}