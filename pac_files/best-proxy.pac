function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 213.199.47.140:1080",
        "SOCKS 176.12.65.24:443",
        "SOCKS 88.247.177.8:3310",
        "SOCKS 45.192.9.27:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 202.62.42.92:1080",
        "SOCKS 5.249.165.195:1080",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 144.124.227.88:3129",
        "SOCKS 82.114.228.67:1080",
        "SOCKS 5.101.118.69:10123",
        "SOCKS 201.184.165.91:1080",
        "SOCKS 103.162.57.42:1080",
        "SOCKS 45.10.71.23:8888",
        "SOCKS 54.46.6.234:3129",
        "SOCKS 47.75.116.41:10800",
        "SOCKS 177.10.66.14:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 152.89.104.11:1080",
        "SOCKS 223.25.110.37:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}