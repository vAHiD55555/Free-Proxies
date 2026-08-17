function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.97.19.9:1081",
        "SOCKS 141.148.158.143:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 90.150.187.186:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 5.79.163.26:1080",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 43.135.179.129:7890",
        "SOCKS 213.230.121.41:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 220.112.1.194:1088",
        "SOCKS 223.111.182.16:1100",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 216.106.179.216:49444",
        "SOCKS 157.20.27.132:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}