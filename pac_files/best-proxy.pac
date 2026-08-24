function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.74.31.30:8180",
        "SOCKS 43.153.28.68:3128",
        "SOCKS 72.195.34.59:4145",
        "SOCKS 45.74.31.42:8428",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 45.74.31.30:34223",
        "SOCKS 45.74.31.42:10513",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 45.74.31.42:6196",
        "SOCKS 89.169.37.254:1080",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 45.74.31.42:9280",
        "SOCKS 178.104.242.12:9050",
        "SOCKS 45.74.31.42:11340",
        "SOCKS 186.219.210.133:7080",
        "SOCKS 45.74.31.42:9090",
        "SOCKS 45.74.31.30:10088",
        "SOCKS 13.214.205.160:8024",
        "SOCKS 45.74.31.42:5432",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}