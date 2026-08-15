function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 87.239.251.202:1081",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 165.154.20.187:10808",
        "SOCKS 61.9.34.22:58765",
        "SOCKS 8.211.195.173:999",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 93.90.231.101:1080",
        "SOCKS 220.112.1.194:1088",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 178.17.57.222:1080",
        "SOCKS 103.191.196.96:8080",
        "SOCKS 79.134.4.192:1080",
        "SOCKS 195.98.82.62:1080",
        "SOCKS 89.22.238.103:38871",
        "SOCKS 192.73.242.77:9050",
        "SOCKS 91.107.155.72:9080",
        "SOCKS 185.133.239.244:16299",
        "SOCKS 111.119.162.248:10923",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}