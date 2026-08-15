function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 158.179.171.148:1080",
        "SOCKS 194.163.174.78:1083",
        "SOCKS 8.211.195.173:999",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 27.131.14.9:1088",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 129.150.47.213:9050",
        "SOCKS 178.18.207.85:8888",
        "SOCKS 80.209.242.189:1080",
        "SOCKS 213.165.43.73:46650",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 154.203.132.81:5080",
        "SOCKS 132.226.7.23:30277",
        "SOCKS 191.223.220.23:1080",
        "SOCKS 47.91.29.151:9098",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 216.22.13.244:1081",
        "SOCKS 165.245.187.193:3128",
        "SOCKS 119.28.64.217:50161",
        "SOCKS 147.45.60.250:1082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}