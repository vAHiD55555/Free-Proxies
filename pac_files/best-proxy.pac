function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.90:32931",
        "SOCKS 62.60.131.205:4036",
        "SOCKS 36.255.98.180:4008",
        "SOCKS 113.166.13.135:3128",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 62.60.131.253:4201",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 62.60.131.204:5280",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 101.32.244.5:3128",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 105.157.202.243:3128",
        "SOCKS 62.60.131.180:11378",
        "SOCKS 62.60.131.204:8131",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 62.60.131.178:10065",
        "SOCKS 62.60.131.204:5057",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}