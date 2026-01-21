function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.179:4223",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 36.255.98.169:5233",
        "SOCKS 36.255.98.177:7069",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 62.60.131.196:4030",
        "SOCKS 120.77.203.0:443",
        "SOCKS 195.86.215.2:3128",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 36.255.98.180:5197",
        "SOCKS 36.255.98.181:13179",
        "SOCKS 172.236.130.43:80",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 36.255.98.167:8318",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 91.142.79.166:1080",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 62.60.131.195:4126",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}