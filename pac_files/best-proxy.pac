function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.239.106.24:1080",
        "SOCKS 88.218.206.170:5432",
        "SOCKS 141.148.158.143:1080",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 43.153.82.29:9050",
        "SOCKS 43.133.128.153:16012",
        "SOCKS 194.163.174.78:1085",
        "SOCKS 45.43.60.220:8080",
        "SOCKS 185.239.50.122:10808",
        "SOCKS 152.32.168.221:10808",
        "SOCKS 47.245.165.201:1080",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 81.70.62.145:15163",
        "SOCKS 77.239.108.222:11082",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 34.69.61.247:80",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 138.124.118.235:8080",
        "SOCKS 72.195.34.41:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}