function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 3.129.27.9:17000",
        "SOCKS 85.198.82.207:1080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 88.218.206.170:5432",
        "SOCKS 216.106.179.216:49191",
        "SOCKS 58.144.196.192:39105",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 167.86.79.35:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 45.77.37.39:2030",
        "SOCKS 158.101.8.92:1080",
        "SOCKS 103.134.220.143:1080",
        "SOCKS 195.19.50.79:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 31.56.78.134:7777",
        "SOCKS 195.133.14.222:49152",
        "SOCKS 143.47.59.115:9050",
        "SOCKS 185.200.177.138:445",
        "SOCKS 36.133.69.144:9004",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}