function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.194:4298",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 27.147.137.234:9108",
        "SOCKS 67.43.236.21:2665",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 119.81.189.194:80",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 167.172.109.12:39533",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}